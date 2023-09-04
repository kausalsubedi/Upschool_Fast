<?php

namespace App\Admin\Controllers;

use App\Models\Book;
use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;

class AdminBookController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Book';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Book());

        $grid->column('id', __('Id'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));
        $grid->column('title', __('Title'));
        $grid->column('slug', __('Slug'));
        $grid->column('description', __('Description'));
        $grid->column('teacher_email', __('Teacher email'));
        $grid->column('first_name', __('First name'));
        $grid->column('last_name', __('Last name'));
        $grid->column('school_name', __('School name'));
        $grid->column('country', __('Country'));
        $grid->column('age', __('Age'));
        $grid->column('path', __('Path'));
        $grid->column('canva_link', __('Canva link'));
        $grid->column('active', __('Active'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Book::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));
        $show->field('title', __('Title'));
        $show->field('slug', __('Slug'));
        $show->field('description', __('Description'));
        $show->field('teacher_email', __('Teacher email'));
        $show->field('first_name', __('First name'));
        $show->field('last_name', __('Last name'));
        $show->field('school_name', __('School name'));
        $show->field('country', __('Country'));
        $show->field('age', __('Age'));
        $show->field('path', __('Path'));
        $show->field('canva_link', __('Canva link'));
        $show->field('active', __('Active'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Book());

        $form->text('title', __('Title'));
        $form->text('slug', __('Slug'));
        $form->textarea('description', __('Description'));
        $form->text('teacher_email', __('Teacher email'));
        $form->text('first_name', __('First name'));
        $form->text('last_name', __('Last name'));
        $form->text('school_name', __('School name'));
        $form->text('country', __('Country'));
        $form->number('age', __('Age'));
        $form->text('path', __('Path'));
        $form->text('canva_link', __('Canva link'));
        $form->switch('active', __('Active'));

        return $form;
    }
}
