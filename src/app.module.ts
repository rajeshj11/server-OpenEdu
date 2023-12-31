import { Module, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from './prisma/prisma.module';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { LearnController } from './learn/learn.controller';
import { LearnService } from './learn/learn.service';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import Redis from 'ioredis';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    PrismaModule,
    TerminusModule,
    HttpModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    DashboardController,
    LearnController,
  ],
  providers: [
    AppService,
    AuthService,
    DashboardService,
    LearnService,
    {
      provide: 'REDIS',
      useFactory: () => {
        const client = new Redis(process.env.REDDIS_URL);
        client.on('error', (err) => console.error('Redis error', err));
        return client;
      },
      scope: Scope.DEFAULT,
    },
  ],
})
export class AppModule { }
