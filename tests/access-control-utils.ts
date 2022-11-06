import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AccessDenied,
  AccessGranted,
  AuthenticationFailure,
  AuthenticationSuccess
} from "../generated/AccessControl/AccessControl"

export function createAccessDeniedEvent(
  sub_addr: Address,
  obj_addr: Address,
  action: i32,
  message: string
): AccessDenied {
  let accessDeniedEvent = changetype<AccessDenied>(newMockEvent())

  accessDeniedEvent.parameters = new Array()

  accessDeniedEvent.parameters.push(
    new ethereum.EventParam("sub_addr", ethereum.Value.fromAddress(sub_addr))
  )
  accessDeniedEvent.parameters.push(
    new ethereum.EventParam("obj_addr", ethereum.Value.fromAddress(obj_addr))
  )
  accessDeniedEvent.parameters.push(
    new ethereum.EventParam(
      "action",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(action))
    )
  )
  accessDeniedEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return accessDeniedEvent
}

export function createAccessGrantedEvent(
  sub_addr: Address,
  obj_addr: Address,
  action: i32
): AccessGranted {
  let accessGrantedEvent = changetype<AccessGranted>(newMockEvent())

  accessGrantedEvent.parameters = new Array()

  accessGrantedEvent.parameters.push(
    new ethereum.EventParam("sub_addr", ethereum.Value.fromAddress(sub_addr))
  )
  accessGrantedEvent.parameters.push(
    new ethereum.EventParam("obj_addr", ethereum.Value.fromAddress(obj_addr))
  )
  accessGrantedEvent.parameters.push(
    new ethereum.EventParam(
      "action",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(action))
    )
  )

  return accessGrantedEvent
}

export function createAuthenticationFailureEvent(
  sub_addr: Address
): AuthenticationFailure {
  let authenticationFailureEvent = changetype<AuthenticationFailure>(
    newMockEvent()
  )

  authenticationFailureEvent.parameters = new Array()

  authenticationFailureEvent.parameters.push(
    new ethereum.EventParam("sub_addr", ethereum.Value.fromAddress(sub_addr))
  )

  return authenticationFailureEvent
}

export function createAuthenticationSuccessEvent(
  sub_addr: Address
): AuthenticationSuccess {
  let authenticationSuccessEvent = changetype<AuthenticationSuccess>(
    newMockEvent()
  )

  authenticationSuccessEvent.parameters = new Array()

  authenticationSuccessEvent.parameters.push(
    new ethereum.EventParam("sub_addr", ethereum.Value.fromAddress(sub_addr))
  )

  return authenticationSuccessEvent
}
