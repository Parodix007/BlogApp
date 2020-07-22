import React from 'react'
import styles from './Contact.module.scss'
import className from 'classnames'
import * as WizardPart from './Contact_CC/Wizard'
import UsersData from './Contact_CC/Pages/usersData'

const innerWrapper = className(styles.innerWrapper, 'row')
const Wrapper = className(styles.Wrapper, 'container')
const ContactView = () => (
    <div className={Wrapper}>
        <div className={innerWrapper}>
            <div className={styles.Header}>
                <h1>Contact Form</h1>
            </div>
            <WizardPart.Wizard>
                <WizardPart.ContactPart>
                    <UsersData />
                </WizardPart.ContactPart>
                <hr />
                <WizardPart.Buttons className={styles.Buttons} />
            </WizardPart.Wizard>
        </div>
    </div>
)

export default ContactView