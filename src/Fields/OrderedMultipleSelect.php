<?php

namespace BadChoice\Thrust\Fields;

class OrderedMultipleSelect extends Select
{
    protected $options    = [];
    protected $allowNull  = false;
    protected $searchable = false;
    protected $isMultiple = true;

    public function displayInIndex($object)
    {
        return collect($this->getValue($object))->map(function ($value) {
            return $this->getOptions()[$value]; //que mostri totes les opcions
        })->implode(', ');
    }

    public function displayInEdit($object, $inline = false)
    {
        return view('thrust::fields.orderedMultipleSelect', [
            'title'       => $this->getTitle(),
            'inline'      => $inline,
            'field'       => $this->field,
            'searchable'  => $this->searchable,
            'values'       => json_decode($this->getValue($object)),
            'options'     => $this->getOptions(),
            'description' => $this->getDescription(),
        ])->render();
    }
}
