$(document).ready(function() {
var currentIndex = 0;
var items = $('.image');
items.hide();
$('.image').eq(currentIndex).fadeIn();
var itemAmt = items.length;

$('.next').click(function() {
  $('.image').eq(currentIndex).fadeOut();
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }  
  $('.image').eq(currentIndex).fadeIn();
});

$('.prev').click(function() {
  $('.image').eq(currentIndex).fadeOut();
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = 4;
  }  
  $('.image').eq(currentIndex).fadeIn();
});
$('.one').click(function() {
  $('.image').eq(currentIndex).fadeOut();
  currentIndex = 0; 
  $('.image').eq(currentIndex).fadeIn();
});
$('.two').click(function() {
  $('.image').eq(currentIndex).fadeOut();
  currentIndex = 1; 
  $('.image').eq(currentIndex).fadeIn();
});
$('.three').click(function() {
  $('.image').eq(currentIndex).fadeOut();
  currentIndex = 2; 
  $('.image').eq(currentIndex).fadeIn();
});
$('.four').click(function() {
  $('.image').eq(currentIndex).fadeOut();
  currentIndex = 3; 
  $('.image').eq(currentIndex).fadeIn();
});
$('.five').click(function() {
  $('.image').eq(currentIndex).fadeOut();
  currentIndex = 4; 
  $('.image').eq(currentIndex).fadeIn();
});
});