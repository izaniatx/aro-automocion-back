<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\Rol; 

class RolSeeder extends Seeder
{
    public function run(): void
    {
        // Opción A: Usando el modelo Eloquent (Recomendado)
        Rol::create(['rol' => 'Administrador']);
        Rol::create(['rol' => 'Cliente']);

        
    }
}