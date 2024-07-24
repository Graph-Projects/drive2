<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'image',
        'description',
        'price',
        'stock',
    ];

    public function categories(){
        return $this->belongsToMany(Category::class);
    }

    public function itemOrders()
    {
        return $this->hasMany(ItemOrder::class);
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function scopeWithSimilarTags($query, $tags)
    {
        return $query->whereHas('tags', function($q) use ($tags) {
            $q->whereIn('name', $tags);
        });
    }

}