/**
 * See the NOTICE file distributed with this work for additional information
 * regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { type ReactNode } from 'react';

import Home from 'src/content/home/Home';
import Login from 'src/content/app/login/Login';
import { NotFoundErrorScreen } from 'src/shared/components/error-screen';

export type RouteConfig = {
  path: string;
  element: ReactNode;
};

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login/*',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFoundErrorScreen />
  }
];

export default routes;
