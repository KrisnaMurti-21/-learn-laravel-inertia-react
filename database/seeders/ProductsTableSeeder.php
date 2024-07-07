<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Assuming you have categories with IDs from 1 to 5
        $categoryIds = range(1, 5);

        for ($i = 0; $i < 20; $i++) {
            DB::table('products')->insert([
                'name' => $faker->words(3, true),
                'price' => $faker->numberBetween(1000, 1000000),
                'category_id' => $faker->randomElement($categoryIds),
                'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
                'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
            ]);
        }
    }
}
