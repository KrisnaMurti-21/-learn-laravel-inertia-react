<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $search = $request->input('search');
        // if ($request) {
        //     $data = Product::where('name', 'like', '%' . $search . '%')->get();
        // } else {
        // }
        $data = Product::all()->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'image' => $product->image ? asset('images/' . $product->image) : null,
            ];
        });

        return Inertia::render('Admin/Product/index', [
            'dataBarang' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Product/Edit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'productName' => 'required',
            'price' => 'required',
            'categoryId' => 'required',
            'fileSend' => 'required|image|mimes:png,jpg,jpeg,svg|max:2048',
        ]);

        $imageName = time() . '.' . $request->fileSend->extension();

        $data = [
            'name' => $request->productName,
            'price' => $request->price,
            'category_id' => $request->categoryId,
            'image' => $imageName
        ];
        // dd($data);
        $request->fileSend->move(public_path('images'), $imageName);
        Product::create($data);
        return redirect(route('product.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    //Sebenarnya di index itu bisa cuma untuk belajar saya buat controller search ini
    public function search(Request $request)
    {
        // Memulai query
        $query = Product::query();

        $search = $request->input('search');
        if ($request) {
            // $data = Product::where('name', 'like', '%' . $search . '%')->get();
            // Menerapkan filter pencarian
            if ($search = $request->input('search')) {
                $query->where('name', 'like', "%{$search}%");
            }

            // Menerapkan filter harga minimum
            if ($minPrice = $request->input('minPrice')) {
                $query->where('price', '>=', $minPrice);
            }

            // Menerapkan filter harga maksimum
            if ($maxPrice = $request->input('maxPrice')) {
                $query->where('price', '<=', $maxPrice);
            }

            // Eksekusi query dengan paginasi
            $data = $query->get();
        } else {
            $data = Product::all();
        }
        // dd($data);
        return Inertia::render('Admin/Product/index', [
            'dataBarang' => $data
        ]);
    }
}
