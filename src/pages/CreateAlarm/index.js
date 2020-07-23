import React, { useState } from 'react';
import { Form, TitleInput, DaysOfWeek } from './style';

export default function CreateAlarm() {
 
    const[title, setTitle] = useState('');

    return(
        <Form>
            <TitleInput label="Titulo"
                        value={title => setTitle(title)}
            />

            <DaysOfWeek>
                                
            </DaysOfWeek>
        </Form>
    );
}