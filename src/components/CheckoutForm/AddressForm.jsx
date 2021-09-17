import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { commerce } from '../../lib/commerce';

import FormInput from './FormInput';

const AddressForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');

    const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
    const [shippingSubDivision, setShippingSubDivision] = useState('');

    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
    console.log(countries)
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        console.log(countries);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, [])

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Adress</Typography>
            <FormProvider {...methods}>
               <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First Name'/>
                        <FormInput required name='lastName' label='Last Name'/>
                        <FormInput required name='address' label='Address'/>
                        <FormInput required name='email' label='Email'/>
                        <FormInput required name='city' label='City'/>
                        <FormInput required name='zip' label='ZIP / Postal code'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth OnChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map( (country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>

                                ))}
                            </Select>
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth OnChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth OnChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
