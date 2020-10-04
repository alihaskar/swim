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

import {AnyTransform, Transform} from "@swim/transform";
import {AttributeAnimator} from "./AttributeAnimator";
import {ElementView} from "../element/ElementView";

/** @hidden */
export abstract class TransformAttributeAnimator<V extends ElementView> extends AttributeAnimator<V, Transform, AnyTransform> {
  parse(value: string): Transform {
    return Transform.parse(value);
  }

  fromAny(value: AnyTransform): Transform {
    return Transform.fromAny(value);
  }
}
AttributeAnimator.Transform = TransformAttributeAnimator;
