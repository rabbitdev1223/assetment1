<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'nome' => 'Marco',
            'cognome' => 'Rossi',
            'email' => 'ulysses200915@varen8.com',
            'password' => Hash::make('Edusogno123')
        ]);
        \App\Models\User::factory()->create([
            'nome' => 'Filippo',
            'cognome' => 'D’Amelio',
            'email' => 'qmonkey14@falixiao.com',
            'password' => Hash::make('Edusogno?123'),
            
        ]);
        \App\Models\User::factory()->create([
            'nome' => 'Gian Luca',
            'cognome' => 'Carta',
            'email' => 'mavbafpcmq@hitbase.net',
            'password' => Hash::make('EdusognoCiao'),
        ]);
        \App\Models\User::factory()->create([
            'nome' => 'Stella',
            'cognome' => 'De Grandis',
            'email' => 'dgipolga@edume.me',
            'password' => Hash::make('EdusognoGia'),
        ]);
    }
}
