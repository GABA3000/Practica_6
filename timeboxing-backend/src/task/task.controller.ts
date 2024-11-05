import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from '../auth/dtos/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.findAll();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }
}
