import React from 'react';
import "./MainPage.css"
import { FormCard } from '../components/form-component';

export const MainPage = () => {
    return (
        <div className="main">
            <h2>Оплата</h2>
            <FormCard />
        </div>
    );
}