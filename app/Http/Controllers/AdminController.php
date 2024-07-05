<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/MainPage', [
            'todos' => Todo::latest()->paginate(2),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate(
            [
                'name' => 'required|min:3',
                'is_completed' => 'boolean',
            ],
            [
                'name.required' => 'Data todo tidak boleh kosong',
                'name.min' => 'Data todo minimal 3 karakter',
            ]
        );

        Todo::create($data);
        return back()->with('message', 'Todo created successfully');
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
    /**Pengetahuan baru dalam memanipulasi model seperti dibawah ini */
    /**Lebih cepat dalam mengambil data spesifik */
    public function edit(Todo $todo)
    {
        return Inertia::render('Admin/EditList', [
            'todo' => $todo,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        $data = $request->validate(
            [
                'name' => 'required|min:3',
            ]
        );
        $todo->update($data);
        return redirect(route('admin.index'))->with('message', 'Todo updated successfully');
    }

    public function updateCompleted(Request $request, Todo $todo)
    {
        $data = $request->validate(
            [
                'is_completed' => 'boolean',
            ]
        );
        $todo->update($data);
        return redirect(route('admin.index'))->with('message', 'Todo was change');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
