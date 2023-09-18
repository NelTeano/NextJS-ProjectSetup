'use client'

import React from 'react'

import Navbar from '../../../components/Nav'
import { Button } from '@nextui-org/react'

import { useSelector, useDispatch } from 'react-redux';
import { 
    increment,
    decrement,
    incrementByAmount
} from '../GlobalRedux/Feautures/Counter/counterSlice';


const page = () => {

    

    // const dispatch = useDispatch();

    return (
        <div>
            <Navbar></Navbar>
            Hello This is Homepage
            <Button size="md">Increase </Button>
            <Button size="md">Decrease </Button>
        </div>
    )
}

export default page

