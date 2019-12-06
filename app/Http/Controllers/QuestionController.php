<?php

namespace App\Http\Controllers;


use App\Model\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
      public function __construct()
    {
        $this->middleware('JWT', ['except' => ['index', 'show']]);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Question::latest()->get();
    }
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      //$question = Question::create($request->all());

      $question = new Question;
      $question->title = $request->title;
      $question->slug = str_slug($request->title);
      $question->body = $request->body;
      $question->category_id = $request->category_id;
      $question->user_id = $request->user_id;
      $question->save();

     

      return response('stored successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
      return $question;
    }

 

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        $question->update($request->all());

        return response('Updated Successfully'); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
      $question->delete();

      return response(null, Response::HTTP_NO_CONTENT);
    }
}
