import request from 'supertest';
import { app } from '../../app';

it('should return a 201 on successful signup', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('should return a 400 when an invalid email is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test',
      password: 'password',
    })
    .expect(400);
});

it('should disallow duplicate credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password1',
    })
    .expect(400);
});

it('should set a cookie after successfully signing up', async () => {
  const response = await request(app).post('/api/users/signup').send({
    email: 'test@test.com',
    password: 'password',
  });

  expect(response.get('Set-Cookie')).toBeDefined();
});
