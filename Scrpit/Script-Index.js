function begin()
{
	$("#img-glas").width($("#conten-glas").width()+2);
	$("#img-sho").width($("#conten-glas").width()-148);
}
$(function () {
	$('[data-toggle="popover"]').popover()
});
begin();
$(window).resize(function()
{
	begin();
});