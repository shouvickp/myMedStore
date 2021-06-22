import bcrypt from 'bcryptjs'
const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      mobile: '9876543210',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'John Doe',
      email: 'john@example.com',
      mobile: '9876543210',
      password: bcrypt.hashSync('123456', 10),
      city: 'Howrah'
    },
    {
      name: 'Jane Doe',
      email: 'jane@example.com',
      mobile: '9876543210',
      password: bcrypt.hashSync('123456', 10),
      city: 'Kolkata'
    },
  ]
  
  export default users