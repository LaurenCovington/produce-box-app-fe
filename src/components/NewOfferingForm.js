import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewOfferingForm.css';
// how to make nullable values here ????????? SEARCH: 'create optional' tags, is_nullable=t or =f on form fields themselves
// correct offering fields in place? correct default data types?
// should setting avail_inv == total_inv stay off? 
// bool default vals correct?
// how to use datetime on FE, for contribution_date attr default val? >>>> there's smthg for tht
// should dropoff_location be an attr here?
const NewOfferingForm = (props) => {
    const [offeringForm, setOfferingForm] = useState({
        name: '',
        total_inventory: '', 
        expiration_date: '',
        usda_organic: '',
        usage_time_limit: '',
        side_effects: '',
        contribution_date: '',
        bake_date: '',
        dried_date: '',
        make_date: '',
        dropoff_location: ''
    });
    
    const onNameChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            name: event.target.value
        })
    }

    const onInventoryChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            total_inventory: event.target.value
        })
    }

    const onOrganicStatusChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            usda_organic: event.target.value
        })
    }

    const onUseTimeLimChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            usage_time_limit: event.target.value
        })
    }

    const onSideEffectsChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            side_effects: event.target.value
        })
    }

    const onContribDateChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            contribution_date: event.target.value
        })
    }

    const onExpirationDateChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            expiration_date: event.target.value
        })
    }

    const onBakeDateChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            bake_date: event.target.value
        })
    }

    const onDriedDateChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            dried_date: event.target.value
        })
    }

    const onMakeDateChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            make_date: event.target.value
        })
    }

    const onDropLocChange = (event) => {
        setOfferingForm({
            ...offeringForm,
            dropoff_location: event.target.value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.createNewOffering({
            name: offeringForm.name,
            total_inventory: offeringForm.total_inventory,
            usda_organic: offeringForm.usda_organic,
            usage_time_limit: offeringForm.usage_time_limit,
            side_effects: offeringForm.side_effects,
            contribution_date: offeringForm.contribution_date,
            expiration_date: offeringForm.expiration_date,
            bake_date: offeringForm.bake_date,
            dried_date: offeringForm.dried_date,
            make_date: offeringForm.make_date,
            dropoff_location: offeringForm.dropoff_location
        })

        setOfferingForm({
            name: '',
            total_inventory: '',
            usda_organic: '',
            usage_time_limit: '',
            side_effects: '',
            contribution_date: '',
            expiration_date: '',
            bake_date: '',
            dried_date: '',
            make_date: '',
            dropoff_location: ''
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className='offering-form-entries'>
                <label className='field-title'>Offering Name</label> 
                <input placeholder="Name of donation"
                    value={offeringForm.name}
                    onChange={ onNameChange }
                    className={(offeringForm.name.length === 0) || (offeringForm.name.length > 30)? 'invalid-form-input' : ''}
                />
            </div>

            <div className='offering-form-entries'> {/* className logic needs to be condensed; get out of ternary syntax */}
                <label>Total Inventory</label> 
                <input placeholder="Digits, please!"
                    value={offeringForm.total_inventory}
                    onChange={ onInventoryChange }
                    className={(offeringForm.total_inventory < 0) || (offeringForm.total_inventory === 0)? 'invalid-form-input' : ''}
                />
            </div>

            <div className='offering-form-entries'> {/* check className logic */}
                <label>USDA Organic?</label> 
                <input placeholder="Enter 'True' or 'False'"
                    value={offeringForm.usda_organic}
                    onChange={ onOrganicStatusChange }
                    className={(offeringForm.usda_organic !== false) || (offeringForm.usda_organic !== true)? 'invalid-form-input' : ''}
                />
            </div>

            <div className='offering-form-entries'> {/* check className logic, nullables? */}
                <label>Usage Time Limit</label> 
                <input placeholder="In weeks"
                    value={offeringForm.usage_time_limit}
                    onChange={ onUseTimeLimChange }
                    className={(offeringForm.usage_time_limit.length === 0) || (offeringForm.usage_time_limit.length > 50)? 'invalid-form-input' : ''}
                />
            </div>

            <div className='offering-form-entries'> {/* check disable logic given nullables? */}
                <label>Side Effects - if any</label> 
                <input placeholder="Enter 'N/A' if needed"
                    value={offeringForm.side_effects}
                    onChange={ onSideEffectsChange }
                    // className={(offeringForm.side_effects.length < 0) || (offeringForm.usage_time_limit.length > 100)? 'invalid-form-input' : ''}
                />
            </div>

            <div className='offering-form-entries'> {/* how to do default=now here?; any 'disable' logic to add here? */}
                <label>Contribution Date</label> 
                <input placeholder="YYYY-MM-DD"
                    value={offeringForm.contribution_date}
                    onChange={ onContribDateChange}
                />
            </div>

            <div className='offering-form-entries'> {/* how to do default=now here?; any 'disable' logic to add here? */}
                <label>Expiration Date</label> 
                <input placeholder="YYYY-MM-DD"
                    value={offeringForm.expiration_date}
                    onChange={ onExpirationDateChange}
                />
            </div>

            <div className='offering-form-entries'> {/* nullables?, disable logic given nullables? */}
                <label>Bake Date - if any</label> 
                <input placeholder="YYYY-MM-DD"
                    value={offeringForm.bake_date}
                    onChange={ onBakeDateChange }
                    //className={(offeringForm.bake_date.length < 0) || (offeringForm.usage_time_limit.length > 100)? 'invalid-form-input' : ''}
                />
            </div>

            <div className='offering-form-entries'> {/* nullables?, disable logic given nullables? */}
                <label>Dried Date - if any</label> 
                <input placeholder="YYYY-MM-DD"
                    value={offeringForm.dried_date}
                    onChange={ onDriedDateChange }
                    //className={(offeringForm.bake_date.length < 0) || (offeringForm.usage_time_limit.length > 100)? 'invalid-form-input' : ''}
                />
            </div>

            <div className='offering-form-entries'> {/* nullables?, disable logic given nullables? */}
                <label>Make Date - if any</label> 
                <input placeholder="YYYY-MM-DD"
                    value={offeringForm.make_date}
                    onChange={ onMakeDateChange }
                    //className={(offeringForm.bake_date.length < 0) || (offeringForm.usage_time_limit.length > 100)? 'invalid-form-input' : ''}
                />
            </div>

            <div className='offering-form-entries'> {/* nullables?, disable logic given nullables? */}
                <label>Drop-Off Location</label> 
                <input placeholder="Address given by NPO"
                    value={offeringForm.dropoff_location}
                    onChange={ onDropLocChange }
                    className={(offeringForm.dropoff_location.length === 0) || (offeringForm.usage_time_limit.length > 100)? 'invalid-form-input' : ''}
                />
            </div>

            {/* just go to the 'Continue Walkthrough' button */}
            {/* <input className='submitOffering'
                type="submit"
                value="Post Offering Batch"
                disabled={((offeringForm.name.length === 0) || (offeringForm.name.length > 30))}
            /> */}
        </form>
    );
};

export default NewOfferingForm;


NewOfferingForm.propTypes = {
    createNewOffering: PropTypes.func.isRequired
}

