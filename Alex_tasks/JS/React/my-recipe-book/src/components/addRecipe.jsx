import React from 'react';
import { useForm } from "react-hook-form";

function Overlay({ className, handleClassChange, handleClassChangeOverlay }) {
    return (
        <div
            className={className || "overlay hidden"}
            onClick={() => { handleClassChange(); handleClassChangeOverlay() }}
        >
        </div>
    )
}

function AddRecipe({ className, handleClassChange, handleClassChangeOverlay }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(errors);
    return (
        <div className={className || "add-recipe-window hidden"}>
            <button
                className="btn--close-modal"
                onClick={() => { handleClassChange(); handleClassChangeOverlay() }}
            >
                &times;
            </button>
            <form
                className="upload"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="upload__column">
                    <h3 className="upload__heading">Recipe data</h3>
                    <label>
                        Title
                        <p>{errors.title?.message}</p>
                    </label>
                    <input
                        name="title" type="text"
                        {...register('title',
                            {
                                required: 'Required.'
                            })
                        }
                    />
                    <label>
                        URL
                        <p>{errors.sourceUrl?.message}</p>
                    </label>
                    <input
                        name="sourceUrl" type="text"
                        {...register('sourceUrl',
                            {
                                required: 'Required.',
                                pattern: {
                                    value: / /,
                                    message: "This field requires URL"
                                }
                            })
                        }
                    />
                    <label>
                        Image URL
                        <p>{errors.image?.message}</p>
                    </label>
                    <input
                        name="image" type="text"
                        {...register('image',
                            {
                                required: 'Required.'
                            })
                        }
                    />
                    <label>
                        Publisher
                        <p>{errors.publisher?.message}</p>
                    </label>
                    <input
                        name="publisher" type="text"
                        {...register('publisher',
                            {
                                required: 'Required.'
                            })
                        }
                    />
                    <label>
                        Prep time
                        <p>{errors.cookingTime?.message}</p>
                    </label>
                    <input
                        name="cookingTime" type="number"
                        {...register('cookingTime',
                            {
                                required: 'Required.'
                            })
                        }
                    />
                    <label>
                        Servings
                        <p>{errors.servings?.message}</p>
                    </label>
                    <input
                        name="servings" type="number"
                        {...register('servings',
                            {
                                required: 'Required.'
                            })
                        }
                    />
                </div>

                <div className="upload__column">
                    <h3 className="upload__heading">Ingredients</h3>
                    <label>
                        Ingredient 1
                        <p>{errors.ingredients?.message}</p>
                    </label>
                    <input
                        type="text" name="ingredient-1" placeholder="Format: 'Quantity,Unit,Description'"
                        {...register('ingredients[0]',
                            {
                                required: 'Required.'
                            })
                        }
                    />
                    <label>Ingredient 2</label>
                    <input
                        type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'"
                        {...register('ingredients[1]')}
                    />
                    <label>Ingredient 3</label>
                    <input
                        type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'"
                        {...register('ingredients[2]')}
                    />
                    <label>Ingredient 4</label>
                    <input
                        type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'"
                        {...register('ingredients[3]')}
                    />
                    <label>Ingredient 5</label>
                    <input
                        type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'"
                        {...register('ingredients[4]')}
                    />
                    <label>Ingredient 6</label>
                    <input
                        type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'"
                        {...register('ingredients[5]')}
                    />
                </div>

                <button
                    className="btn upload__btn"
                    type='submit'
                >
                    <svg>
                        <use href="src/img/icons.svg#icon-upload-cloud"></use>
                    </svg>
                    <span>Upload</span>
                </button>
            </form>
        </div>
    )
}

export { Overlay };
export default AddRecipe;
