import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { publicDecrypt } from 'crypto';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies";
    }
    @Get("search")
    search(@Query("year") seachingYear: string){
        return `We are searching for a movie made after: ${seachingYear} `;
    }
    @Get("/:id")
    getOne(@Param("id") movieId:string){
        return `This will return one movie with the id: ${movieId}`
    }

    @Post()
    create(@Body() movieData){
        return movieData;
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch('/:id')
    path(@Param('id') movieId:string, @Body() updateData){
        return {
            updateMovie:movieId,
            ...updateData,
        }
    }


   
}
