export const person = {
    firstname: {
        label: 'FirstName',
        value: 'Manish',
        type: 'text',
        validation: {
            required: true
        }
    },
    lastname: {
        label: 'LastName',
        value: 'Sharma',
        type: 'text',
        validation: {
            required: true
        }
    },
    age: {
        label: 'Age',
        value: '35',
        type: 'number',
        validation: {
            required: true
        }
    },
    city: {
        label: 'City',
        value: 'Pune',
        type: 'text',
        validation: {
            required: true
        }
    },
    gender: {
        label: 'Gender',
        value: 'M',
        type: 'radio',
        options: [
            {label: "Male", value: 'M'},
            {label: "Female", value: 'F'}
        ]
    }
}