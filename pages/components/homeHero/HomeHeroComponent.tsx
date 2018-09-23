import { Bind, Debounce } from 'lodash-decorators';
import React from 'react';
import { css } from 'react-emotion';
import { Arc, FastLayer, Stage } from 'react-konva';
import { animationFrameScheduler, interval, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

const stageCss = css({
  opacity: 0.3,
  filter: 'blur(1.3px)',
});

interface IArcConfig {
  x: number;
  y: number;
  wind: number;
  speed: number;
  radius: number;
}

interface IState {
  width: number;
  height: number;
  orbs: IArcConfig[];
  animationFrame$?: Subscription;
}

class HomeHeroComponent extends React.Component<any, IState> {
  public readonly state: IState = {
    ...this.getWindowSize(),
    orbs: [],
  };
  public ref!: Stage;

  public componentDidMount() {
    // create a subscription to update the position of the orbs and a max rate of 50fps
    const animationFrame$ = interval(0, animationFrameScheduler)
      .pipe(throttleTime(1000 / 50))
      .subscribe(this.nextAnimation);

    this.setState({
      animationFrame$,
      orbs: Array.from(Array(50).keys()).map((_, i) => ({
        ...this.initializeArc(),
      })),
    });

    window.addEventListener('resize', this.handleResize);
  }

  public componentWillReceiveProps() {
    window.removeEventListener('resize', this.handleResize);
  }

  public componentWillUnmount() {
    if (this.state.animationFrame$) {
      this.state.animationFrame$.unsubscribe();
    }
  }

  @Debounce(250)
  @Bind()
  public handleResize() {
    this.setState({
      ...this.getWindowSize(),
    });
  }

  @Bind()
  public getWindowSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight - 47,
    };
  }

  @Bind()
  public setStageRef(ref?: any): void {
    this.ref = ref as Stage;
  }

  /**
   * Update the x/y coordinates of the Arcs drawn onto main layer
   */
  @Bind()
  public nextAnimation(): void {
    const nextOrbs = [...this.state.orbs];
    this.setState({
      orbs: nextOrbs.map((orb) => {
        if (orb.x > this.state.width || orb.y > this.state.height) {
          return this.initializeArc();
        }
        return {
          ...orb,
          x: orb.x + orb.wind,
          y: orb.y + orb.speed,
        };
      }),
    });
  }

  public render() {
    return (
      <Stage
        ref={this.setStageRef}
        width={this.state.width}
        height={this.state.height}
        className={stageCss}
      >
        <FastLayer>
          {this.state.orbs.map((orb, i) => (
            <Arc
              key={i}
              innerRadius={0}
              outerRadius={orb.radius}
              angle={360}
              x={orb.x}
              y={orb.y}
              fill={'rgb(255, 255, 255)'}
            />
          ))}
        </FastLayer>
      </Stage>
    );
  }

  private random(min: number, max: number) {
    return Math.round((min + Math.random() * (max - min)));
  }

  private initializeArc(): IArcConfig {
    return {
      x: this.random(0, this.state.width),
      y: this.random(-this.state.height, 0),
      radius: this.random(0.5, 3.0),
      speed: this.random(0.5, 1),
      wind: this.random(-0.5, 3.0),
    };
  }
}

export default HomeHeroComponent;
