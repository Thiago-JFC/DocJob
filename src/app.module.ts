import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { DocumentModule } from './routes/document/document.module';


@Module({
  imports: [
    DocumentModule,

    RouterModule.register([
      {
        path: 'document',
        module: DocumentModule
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
