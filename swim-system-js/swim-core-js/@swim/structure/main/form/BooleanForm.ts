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

import {Item} from "../Item";
import {Bool} from "../Bool";
import {Form} from "../Form";

/** @hidden */
export class BooleanForm extends Form<boolean> {
  /** @hidden */
  readonly _unit: boolean | undefined;

  constructor(unit?: boolean) {
    super();
    this._unit = unit;
  }

  unit(): boolean | undefined;
  unit(unit: boolean | undefined): Form<boolean>;
  unit(unit?: boolean | undefined): boolean | undefined | Form<boolean> {
    if (arguments.length === 0) {
      return this._unit;
    } else {
      return new BooleanForm(unit);
    }
  }

  mold(object: boolean, item?: Item): Item {
    if (item === void 0) {
      return Bool.from(object);
    } else {
      return item.concat(Bool.from(object));
    }
  }

  cast(item: Item, object?: boolean): boolean | undefined {
    const value = item.target();
    try {
      return value.booleanValue();
    } catch (error) {
      return void 0;
    }
  }
}
Form.BooleanForm = BooleanForm;
