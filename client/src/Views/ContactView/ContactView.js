import React from 'react'
import styles from './Contact.module.scss'
import className from 'classnames'
import * as WizardPart from './Contact_CC/Wizard'
import UsersData from './Contact_CC/Pages/usersData'
import Mess from './Contact_CC/Pages/Mess'

const innerWrapper = className(styles.innerWrapper, 'row')
const Wrapper = className(styles.Wrapper, 'container')
const ContactView = () => (
    <div className={Wrapper}>
        <div className={innerWrapper}>
            <div className={styles.Header}>
                <h1>Contact Form</h1>
            </div>
            <WizardPart.Wizard>
                <WizardPart.ContactPart index={1}>
                    <UsersData />
                </WizardPart.ContactPart>
                <WizardPart.ContactPart index={2}>
                    <Mess />
                </WizardPart.ContactPart>
                <WizardPart.Buttons className={styles.Buttons} />
            </WizardPart.Wizard>
        </div>
    </div>
)

export default ContactView