import React, { useCallback } from 'react';
import { Waypoint } from 'react-waypoint';

// import { SECTION_ID } from '@/constants';
import { useAppDispatch } from '@/store';
import { PayloadAction } from '@reduxjs/toolkit';

export type WithWaypointProps<ID> = {
  id: ID;
  waypointProps?: Waypoint.WaypointProps;
};

export type WithWayPointOnEnterCallback<PL, ID> = (
  waypoint: Waypoint.CallbackArgs,
  meta: { id: ID },
) => PayloadAction<PL>;

/**
 * @template PL Payload returned from onEnterCallback
 * @template ID Type of id for waypoint
 * @template P Parameters of Component
 */
export function withWaypoint<PL = unknown, ID = string, P = unknown>(
  Component: React.ComponentType<P>,
  onEnterCallback: WithWayPointOnEnterCallback<PL, ID>,
): React.FC<P & WithWaypointProps<ID>> {
  const WaypointComponent: React.FC<P & WithWaypointProps<ID>> = ({
    children,
    waypointProps,
    id,
    ...rest
  }) => {
    const dispatch = useAppDispatch();
    const onEnter = useCallback(
      (waypoint) => dispatch(onEnterCallback(waypoint, { id })),
      [dispatch, onEnterCallback, id],
    );

    return (
      <Component id={id} {...(rest as unknown as P)}>
        <Waypoint
          topOffset="40%"
          bottomOffset="40%"
          {...waypointProps}
          onEnter={onEnter}
        >
          {children}
        </Waypoint>
      </Component>
    );
  };
  WaypointComponent.displayName = `withWaypoint(${Component.displayName})`;
  return WaypointComponent;
}
