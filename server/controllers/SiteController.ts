import Render, { Renderer } from '@server/decorators/Render';
import { Controller, Ctx, Get } from 'routing-controllers';

@Controller()
export default class SiteController {

  @Get('/')
  public async index(@Render() render: Renderer, @Ctx() context: any) {
    await render('Index');
  }

  @Get('/portfolio')
  public async portfolio(@Render() render: Renderer) {
    await render('Portfolio');
  }

  @Get('/about')
  public async about(@Render() render: Renderer) {
    await render('About');
  }

}
