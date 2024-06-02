// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Select, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    async function fetchProducts() {
        try {
            const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products');
            setProducts(response.data.data);
            setFilteredProducts(response.data.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching products');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    },)
    useEffect(() => {
        let filtered = products;
        if (filterCategory) {
            filtered = filtered.filter(product => product.category === filterCategory);
        }
        if (sortOrder) {
            filtered = filtered.sort((a, b) =>
                sortOrder === 'asc' ? a.price - b.price : b.price - a.price
            );
        }
        setFilteredProducts(filtered);
    }, [sortOrder, filterCategory, products]);
    return (
        <Box>
            <Select placeholder="Sort by Price" onChange={(e) => setSortOrder(e.target.value)} mb={4}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </Select>
            <Select placeholder="Filter by Category" onChange={(e) => setFilterCategory(e.target.value)} mb={4}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
                <option value="Home Decor">Home Decor</option>
            </Select>
            {loading ? (
                <Spinner />
            ) : error ? (
                <Text color="red.500">{error}</Text>
            ) : (
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};
export default HomePage;