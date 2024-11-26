import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from '../auth/dtos/create-task.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async create(data: CreateTaskDto) {
    return this.prisma.task.create({
      data: data as unknown as Prisma.TaskCreateInput,
    });
  }
  
}
