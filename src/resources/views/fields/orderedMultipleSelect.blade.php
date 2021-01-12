@component('thrust::components.formField', ["field" => $field, "title" => $title, "description" => $description ?? null, "inline" => $inline])
    <input hidden id="{{$field}}" data-id="orderedMultipleSelectId" name="{{$field}}" value="">
    <div id="selectedOptions" class="selectedOptions">
        @if($values)
            @foreach($values as $value)
                <span id="selected-{{$value}}" data-id="{{$value}}" class="selectedOption">
                    <span style="cursor: move;"> {{$options[$value]}} </span >
                    <i id="rmOpt" class="fa fa-times rmOpt"></i>
                </span>
            @endforeach
        @endif
    </div>
    <div id="nonSelectedOptions" class="nonSelectedOptions">
        @foreach($options as $key => $optionValue)
            <span id="nonSelected-{{$key}}" data-id="{{$key}}" class="nonSelectedOption"> {{$optionValue}} </span>
        @endforeach
    </div>

{{--<input hidden id="{{$field}}" name="{{$field}}" value="">--}}
{{--<div id="selectedOptions" class="selectedOptions"></div>--}}
{{--<div id="nonSelectedOptions" class="nonSelectedOptions">--}}
{{--    @foreach($options as $key => $optionValue)--}}

{{--        <span id="n{{str_replace(" ", "", $key)}}" class="nonSelectedOption"> {{$optionValue}} </span>--}}
{{--    @endforeach--}}
{{--</div>--}}

{{--    <input>--}}
{{--    <input hidden name="{{$field}}" value="">--}}
{{--    <select id="{{$field}}" name="{{$field}}[]" @if($searchable) class="searchable" @endif multiple>--}}
{{--        @foreach($options as $key => $optionValue)--}}
{{--            <option @if($value && in_array($key, (array)$value)) selected @endif value="{{$key}}">{{$optionValue}}</option>--}}
{{--        @endforeach--}}
{{--    </select>--}}

@endcomponent
