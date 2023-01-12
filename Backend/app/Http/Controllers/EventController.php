<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Eventi;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function getAll()
    {
        header("Content-Type: application/json");
        return json_encode(Eventi::all());
        
    }
    
    public function joinEvent(Request $request)
    {
        
        $eventObj = Eventi::find($request->event);
        
        $attendees = explode(',' , $eventObj['attendees']);
        $alreadyJoined = str_contains($eventObj->attendees , Auth::user()->email);
        if (!$alreadyJoined) {
            if (count($attendees) == 0)
                $eventObj->attendees .= Auth::user()->email;
            else
                $eventObj->attendees .= ',' . Auth::user()->email;
            $eventObj->save();
        }
        return json_encode(Eventi::all());
    }
}
