import z from 'zod'

const schema = z.string().uuid()

export class CognitoUserId {
  private cognitoUserName: string

  constructor(cognitoUserName: string) {
    try {
      schema.parse(cognitoUserName)

      this.cognitoUserName = cognitoUserName
    } catch (err) {
      throw new Error(`[CognitoUserId.UUID] Failed to init ValueObject: ${err}`)
    }
  }

  get value() {
    return this.cognitoUserName
  }

  public equalsTo(other: CognitoUserId) {
    return other.value === this.value
  }

  public toString() {
    return this.cognitoUserName
  }
}
