<?php

namespace App\Http\Controllers;

use App\Http\Requests\CalculatorRequest;
use Illuminate\Http\Response;

class CalculatorController extends Controller
{
    public function __invoke(CalculatorRequest $request)
    {
        $result = match ($request->operator) {
            '+' => $request->operand_one + $request->operand_two,
            '-' => $request->operand_one - $request->operand_two,
            '*' => $request->operand_one * $request->operand_two,
            '/' => $request->operand_one / $request->operand_two,
            default => 0,
        };
        return response()->json(['success' => true, 'data' => $result], Response::HTTP_OK);
    }
}
