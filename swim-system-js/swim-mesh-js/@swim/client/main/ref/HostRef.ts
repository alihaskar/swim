// Copyright 2015-2020 Swim inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Value, AnyValue} from "@swim/structure";
import {AnyUri, Uri} from "@swim/uri";
import {EventDownlinkInit, EventDownlink} from "../downlink/EventDownlink";
import {ListDownlinkInit, ListDownlink} from "../downlink/ListDownlink";
import {MapDownlinkInit, MapDownlink} from "../downlink/MapDownlink";
import {ValueDownlinkInit, ValueDownlink} from "../downlink/ValueDownlink";
import {RefContext} from "./RefContext";
import {BaseRef} from "./BaseRef";
import {NodeRef} from "./NodeRef";
import {LaneRef} from "./LaneRef";

export class HostRef extends BaseRef {
  /** @hidden */
  readonly _hostUri: Uri;

  constructor(context: RefContext, hostUri: Uri) {
    super(context);
    this._hostUri = hostUri;
  }

  hostUri(): Uri {
    return this._hostUri;
  }

  hostRef(hostUri: AnyUri): HostRef {
    hostUri = Uri.fromAny(hostUri);
    return new HostRef(this._context, hostUri);
  }

  nodeRef(nodeUri: AnyUri): NodeRef {
    nodeUri = Uri.fromAny(nodeUri);
    return new NodeRef(this._context, this._hostUri, nodeUri);
  }

  laneRef(nodeUri: AnyUri, laneUri: AnyUri): LaneRef {
    nodeUri = Uri.fromAny(nodeUri);
    laneUri = Uri.fromAny(laneUri);
    return new LaneRef(this._context, this._hostUri, nodeUri, laneUri);
  }

  downlink(init?: EventDownlinkInit): EventDownlink {
    return new EventDownlink(this._context, this, init, this._hostUri);
  }

  downlinkList(init?: ListDownlinkInit<Value, AnyValue>): ListDownlink<Value, AnyValue>;
  downlinkList<V extends VU, VU = V>(init?: ListDownlinkInit<V, VU>): ListDownlink<V, VU>;
  downlinkList<V extends VU, VU = V>(init?: ListDownlinkInit<V, VU>): ListDownlink<V, VU> {
    return new ListDownlink(this._context, this, init, this._hostUri);
  }

  downlinkMap(init?: MapDownlinkInit<Value, Value, AnyValue, AnyValue>): MapDownlink<Value, Value, AnyValue, AnyValue>;
  downlinkMap<K extends KU, V extends VU, KU = K, VU = V>(init?: MapDownlinkInit<K, V, KU, VU>): MapDownlink<K, V, KU, VU>;
  downlinkMap<K extends KU, V extends VU, KU = K, VU = V>(init?: MapDownlinkInit<K, V, KU, VU>): MapDownlink<K, V, KU, VU> {
    return new MapDownlink(this._context, this, init, this._hostUri);
  }

  downlinkValue(init?: ValueDownlinkInit<Value, AnyValue>): ValueDownlink<Value, AnyValue>;
  downlinkValue<V extends VU, VU = V>(init?: ValueDownlinkInit<V, VU>): ValueDownlink<V, VU>;
  downlinkValue<V extends VU, VU = V>(init?: ValueDownlinkInit<V, VU>): ValueDownlink<V, VU> {
    return new ValueDownlink(this._context, this, init, this._hostUri);
  }

  command(nodeUri: AnyUri, laneUri: AnyUri, body: AnyValue): void {
    this._context.command(this._hostUri, nodeUri, laneUri, body);
  }
}
