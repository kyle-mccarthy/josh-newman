import { Bind } from 'lodash-decorators';
import React from 'react';
import { Arc } from 'react-konva';
import { Observable, Subscription } from 'rxjs';

interface IProps {
  canvasHeight: number;
  canvasWidth: number;
  next$?: Observable<number>;
}

interface IState {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
}

class HeroOrbComponent extends React.Component<IProps, IState> {
  public readonly state: IState = this.initialize();
  private subscription?: Subscription;

  public componentDidMount() {
    if (this.props.next$) {
      this.subscription = this.props.next$.subscribe(this.updateAnimation);
    }
  }

  public componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @Bind()
  public updateAnimation() {
    this.setState((prevState: IState) => {
      if (prevState.y > this.props.canvasHeight || prevState.x > this.props.canvasWidth) {
        return this.initialize();
      }
      return {
        x: prevState.x + prevState.wind,
        y: prevState.y + prevState.speed,
      };
    });
  }

  public render() {
    return(
      <Arc
        innerRadius={0}
        outerRadius={this.state.radius}
        angle={360}
        x={this.state.x}
        y={this.state.y}
        fill={'rgb(255, 255, 255)'}
      />
    );
  }

  private random(min: number, max: number): number {
    return Math.round((min + Math.random() * (max - min)));
  }

  private initialize() {
    return {
      x: this.random(0, this.props.canvasWidth),
      y: this.random(-this.props.canvasHeight, 0),
      radius: this.random(0.5, 3.0),
      speed: this.random(0.5, 1),
      wind: this.random(-0.5, 3.0),
    };
  }
}

export default HeroOrbComponent;
