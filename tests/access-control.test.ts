import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { AccessDenied } from "../generated/schema"
import { AccessDenied as AccessDeniedEvent } from "../generated/AccessControl/AccessControl"
import { handleAccessDenied } from "../src/access-control"
import { createAccessDeniedEvent } from "./access-control-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sub_addr = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let obj_addr = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let action = 123
    let message = "Example string value"
    let newAccessDeniedEvent = createAccessDeniedEvent(
      sub_addr,
      obj_addr,
      action,
      message
    )
    handleAccessDenied(newAccessDeniedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccessDenied created and stored", () => {
    assert.entityCount("AccessDenied", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccessDenied",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sub_addr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AccessDenied",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "obj_addr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AccessDenied",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "action",
      "123"
    )
    assert.fieldEquals(
      "AccessDenied",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "message",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
