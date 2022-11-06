import {
  AccessDenied as AccessDeniedEvent,
  AccessGranted as AccessGrantedEvent,
  AuthenticationFailure as AuthenticationFailureEvent,
  AuthenticationSuccess as AuthenticationSuccessEvent
} from "../generated/AccessControl/AccessControl"
import {
  AccessDenied,
  AccessGranted,
  AuthenticationFailure,
  AuthenticationSuccess
} from "../generated/schema"

export function handleAccessDenied(event: AccessDeniedEvent): void {
  let entity = new AccessDenied(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sub_addr = event.params.sub_addr
  entity.obj_addr = event.params.obj_addr
  entity.action = event.params.action
  entity.message = event.params.message
  entity.save()
}

export function handleAccessGranted(event: AccessGrantedEvent): void {
  let entity = new AccessGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sub_addr = event.params.sub_addr
  entity.obj_addr = event.params.obj_addr
  entity.action = event.params.action
  entity.save()
}

export function handleAuthenticationFailure(
  event: AuthenticationFailureEvent
): void {
  let entity = new AuthenticationFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sub_addr = event.params.sub_addr
  entity.save()
}

export function handleAuthenticationSuccess(
  event: AuthenticationSuccessEvent
): void {
  let entity = new AuthenticationSuccess(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sub_addr = event.params.sub_addr
  entity.save()
}
