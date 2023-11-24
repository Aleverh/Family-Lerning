import Grid2 from '@mui/material/Unstable_Grid2';
import {
    Box, Typography, Button,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import addPicture from '../../../images/lf.svg';
import createProduct from '../../../api/createProduct';
import Container from '../../../components/MUI/mainContainer';
import Header from '../../AllProducts/components/header';
import updateProductInfo from '../../../api/updateProductInfo';
import { db } from '../../../firebase';

function CreateProduct() {
    const navigate = useNavigate();
    const params = useParams();
    const [products, setProducts] = useState(null);
    useEffect(() => {
        onSnapshot(collection(db, 'products'), (doc) => {
            setProducts(doc);
        });
    }, [params.id]);
    const checkState = () => {
        if (params.state === 'edit' && products) {
            const currentProduct = products.docs.filter((item) => item.data().id === params.id);
            return currentProduct[0].data();
        }
    };
    const defaultValues = {
        price: checkState()?.price,
        name: checkState()?.name,
        category: checkState()?.category,
        description: checkState()?.description,
        images: checkState()?.imagesUrl,
    };
    const {
        handleSubmit, control, register,
    } = useForm({ defaultValues });
    const onSubmit = (data) => {
        if (params.state === 'edit') {
            updateProductInfo(params.id, data.name, data.category, data.description, data.images, data.price);
            return navigate(`/product/${params.id}`);
        }
        createProduct(data.name, data.category, data.description, data.images, data.price);
        return navigate('/AllProducts');
    };
    return (
        <Container gap={4} padding="20px" container>
            <Grid2>
                <Header />
                <Typography mt={2} variant="h3">
                    {params.state === 'edit' ? 'Edit the product' : 'Create a new product'}
                </Typography>
            </Grid2>
            <Box component="form" gap="20px" display="flex" flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
                <Grid2 flexDirection="column" display="flex" gap="5px">
                    <Typography variant="p">Name</Typography>
                    <Controller
                        width={900}
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                multiline
                                defaultValue={defaultValues.name || ''}
                                placeholder="Product Name"
                            />
                        )}
                    />
                </Grid2>
                <Grid2 flexDirection="column" display="flex" gap="5px">
                    <Typography variant="p">Category</Typography>
                    <Controller
                        width={900}
                        control={control}
                        name="category"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                multiline
                                defaultValue={defaultValues.category || ''}
                                placeholder="Product category"
                            />
                        )}
                    />
                </Grid2>
                <Grid2 flexDirection="column" display="flex" gap="5px">
                    <Typography variant="p">Description</Typography>
                    <Controller
                        control={control}
                        name="description"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                multiline
                                defaultValue={defaultValues.description || ''}
                                placeholder="Write something awesome..."
                            />
                        )}
                    />
                </Grid2>
                <Grid2 flexDirection="column" display="flex" gap="5px">
                    <Typography variant="p">Price</Typography>
                    <Controller
                        control={control}
                        name="price"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                multiline
                                defaultValue={defaultValues.price || ''}
                                placeholder="Cost"
                            />
                        )}
                    />
                </Grid2>
                <Grid2 flexDirection="column" display="flex" gap="5px">
                    <Typography variant="p">Images</Typography>
                    {/* <Controller */}
                    {/*     control={control} */}
                    {/*     name="images" */}
                    {/*     render={({ field }) => ( */}
                    <TextField
                        {...register('images')}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        defaultValue={defaultValues.images || ''}
                        type="file"
                        inputProps={{ multiple: true }}
                    />
                    {/*     )} */}
                    {/* /> */}
                    <label htmlFor="raised-button-file" style={{ margin: '0 auto', height: '200px', width: '90%' }}>
                        <Button
                            variant="raised"
                            component="span"
                            style={{
                                width: '100%', height: '200px', backgroundColor: 'rgb(244, 246, 248)', border: '1px dashed rgba(145, 158, 171, 0.32)',
                            }}
                        >
                            <img src={addPicture} style={{ position: 'relative', height: '200px' }} alt="dfg" />
                            <Grid2 display="flex" flexDirection="column">
                                <Typography fontWeight="700" variant="h6">Drop or Select file</Typography>
                                <Typography variant="p">Drop files here or click browse thorough your machine</Typography>
                            </Grid2>
                        </Button>
                    </label>
                </Grid2>
                <Grid2 display="flex" justifyContent="end">
                    <Button type="submit" variant="contained" style={{ backgroundColor: 'green', color: 'white', width: 280 }}>
                        {params.state === 'edit' ? 'Apply' : 'Create product'}
                    </Button>
                </Grid2>
            </Box>
        </Container>
    );
}
export default CreateProduct;
