import vine from '@vinejs/vine'

export const RegisterUserValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    password: vine.string().minLength(8),
  })
)

export const LoginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)
