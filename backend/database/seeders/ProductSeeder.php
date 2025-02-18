<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::factory(5)->create([
            // 'name' => 'Test User',
            // 'email' => 'test@example.com',
        ]);
    }
}

/*$category = Category::factory()
            ->has(Product::factory()->count(3))
            ->create();*/