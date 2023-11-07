import Postgres from '../postgres.png'
import Redis from '../Redis.png'

export const  data = [
    {
        id: '1',
        name: 'Cluster1',
        image: `${Redis}`,
        response: 'View Connections',
        status: 'Active',
        saasService: 'Redis Cluster',
        env: 'PreProd',
        isEditing: false
      },
      {
        id:'2',
        name: 'Sent1',
        image: `${Redis}`,
        response: 'View Connections',
        status: 'Inactive',
        saasService: 'Redis Sentinal',
        env: 'Development',
        isEditing: false
      },
      {
        id: '3',
        name: 'Arch1',
        image: `${Postgres}`,
        response: 'View Connections',
        status: 'Active',
        saasService: 'Postgres',
        env: 'Test',
        isEditing: false
    },
    {
      id: '4',
      name: 'Arch2',
      image: `${Postgres}`,
      response: 'View Connections',
      status: 'Active',
      saasService: 'Postgres',
      env: 'Production',
      isEditing: false
  },
]
 


