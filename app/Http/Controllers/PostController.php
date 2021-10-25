<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Exception;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return response()->json(Post::all());
    }

    public function show($id)
    {
        return response()
            ->json(Post::where('id', $id)->first());
    }

    public function update(Request $request, $id)
    {
        try {
            $validateData = $request->validate([
                'title' => 'string|nullable',
                'description' => 'string|nullable',
            ]);

            $post = Post::find(intval($id));
            $post->update($validateData);

            return response()->json($post);
        } catch (Exception $e) {
            return response()->json([
                'msg' => $e
            ]);
        }
    }

    public function create(Request $request)
    {
        try {
            $validateData = $request->validate([
                'title' => 'string|nullable',
                'description' => 'string|nullable',
            ]);
            $post = Post::create($validateData);

            return response()->json($post);
        } catch (Exception $e) {
            return response()->json([
                'msg' => $e
            ]);
        }
    }

    public function delete($id)
    {
        $postDelete = Post::find($id);
        if (isset($postDelete)) {
            $postDelete->delete();
            return response()->json(['message' => 'Bien supprimé']);
        }
        return response()->json(['message' => "L'élément n'existe pas"]);
    }
}
