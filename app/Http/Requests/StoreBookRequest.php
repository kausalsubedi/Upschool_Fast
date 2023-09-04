<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    /**
     * Indicates if the validator should stop on the first rule failure.
     *
     * @var bool
     */
    protected $stopOnFirstFailure = false;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'teacher_email' => ['string', 'email', 'max:255'],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'school_name' => ['string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'age' => ['required', 'integer'],
            'active' => ['integer', 'in:0,1'],
            'path' => ['required', 'string', 'max:255'],
            'canva_link' => ['required', 'string', 'max:255'],
        ];
    }
}
