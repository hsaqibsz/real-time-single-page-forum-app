<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;

class LikeController extends Controller
{
     public function likeIt(reply $reply)
     {
           $reply->like()->create([
               //'user_id' => Auth()->id;
                  'user_id' => '1'
           ]);

           return response ('liked');
     }

     public function unlikeIt(reply $reply)
     {
        
        //$reply->like()->where(['user_id' => Auth()->id])->first()->delete();

        $reply->like()->where('user_id', '1')->first()->delete();
         return response('unliked');
     }
}
