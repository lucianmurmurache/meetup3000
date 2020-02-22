import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

import { mockEvents } from '../mock-events';

describe('<App /> component', () => {

  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

});

describe('<App /> integration', () => {

  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 1.4, 1.5);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.4, 1.5);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.4, 1.5);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
    expect(AppWrapper.find('.Event')).toHaveLength(4);
    AppWrapper.unmount();
  });

});


/*
22.02.2020
============================================CONSOLE ERROR============================================


PASS src/__tests__/NumberOfEvents.test.js
PASS src/__tests__/EventList.test.js
PASS src/__tests__/CitySearch.test.js
PASS src/__tests__/Event.test.js
FAIL src/__tests__/App.test.js
  ● Console

    console.error node_modules/jsdom/lib/jsdom/virtual-console.js:29
      Error: Uncaught [TypeError: Cannot read property 'events' of null]
          at reportException (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\helpers\runtime-script-errors.js:66:24)
          at invokeEventListeners (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:209:9)
          at HTMLUnknownElementImpl._dispatch (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:119:9)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:82:17)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\nodes\HTMLElement-impl.js:30:27)
          at HTMLUnknownElement.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:157:21)
          at Object.invokeGuardedCallbackDev (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:385:16)
          at invokeGuardedCallback (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:440:31)
          at beginWork$$1 (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:25780:7)
          at performUnitOfWork (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24698:12) TypeError: Cannot read property 'events' of null
          at App.render (C:\Users\lucia\meetup3000\meetup3000\src\App.js:18:39)
          at finishClassComponent (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:18470:31)
          at updateClassComponent (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:18423:24)
          at beginWork$1 (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:20186:16)
          at HTMLUnknownElement.callCallback (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:336:14)
          at invokeEventListeners (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:193:27)
          at HTMLUnknownElementImpl._dispatch (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:119:9)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:82:17)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\nodes\HTMLElement-impl.js:30:27)
          at HTMLUnknownElement.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:157:21)
          at Object.invokeGuardedCallbackDev (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:385:16)
          at invokeGuardedCallback (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:440:31)
          at beginWork$$1 (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:25780:7)
          at performUnitOfWork (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24698:12)
          at workLoopSync (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24671:22)
          at performSyncWorkOnRoot (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24270:11)
          at scheduleUpdateOnFiber (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:23698:7)
          at updateContainer (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:27103:3)
          at C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:27528:7
          at unbatchedUpdates (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24433:12)
          at legacyRenderSubtreeIntoContainer (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:27527:5)
          at Object.render (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:27608:10)
          at fn (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:437:26)
          at C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:354:37
          at batchedUpdates$1 (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24386:12)
          at Object.act (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom-test-utils.development.js:1092:14)
          at wrapAct (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:354:13)
          at Object.render (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:423:16)
          at new ReactWrapper (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme\src\ReactWrapper.js:115:16)
          at mount (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme\src\mount.js:10:10)
          at Object.<anonymous> (C:\Users\lucia\meetup3000\meetup3000\src\__tests__\App.test.js:30:24)
          at Object.asyncJestTest (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-jasmine2\build\jasmineAsyncInstall.js:102:37)
          at C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-jasmine2\build\queueRunner.js:43:12
          at new Promise (<anonymous>)
          at mapper (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-jasmine2\build\queueRunner.js:26:19)
          at C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-jasmine2\build\queueRunner.js:73:41
          at processTicksAndRejections (internal/process/task_queues.js:93:5)
    console.error node_modules/react-dom/cjs/react-dom.development.js:21843
      The above error occurred in the <App> component:
          in App (created by WrapperComponent)
          in WrapperComponent

      Consider adding an error boundary to your tree to customize error handling behavior.
      Visit https://fb.me/react-error-boundaries to learn more about error boundaries.
    console.error node_modules/jsdom/lib/jsdom/virtual-console.js:29
      Error: Uncaught [TypeError: Cannot read property 'events' of null]
          at reportException (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\helpers\runtime-script-errors.js:66:24)
          at invokeEventListeners (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:209:9)
          at HTMLUnknownElementImpl._dispatch (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:119:9)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:82:17)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\nodes\HTMLElement-impl.js:30:27)
          at HTMLUnknownElement.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:157:21)
          at Object.invokeGuardedCallbackDev (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:385:16)
          at invokeGuardedCallback (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:440:31)
          at beginWork$$1 (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:25780:7)
          at performUnitOfWork (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24698:12) TypeError: Cannot read property 'events' of null
          at App.render (C:\Users\lucia\meetup3000\meetup3000\src\App.js:18:39)
          at finishClassComponent (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:18470:31)
          at updateClassComponent (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:18423:24)
          at beginWork$1 (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:20186:16)
          at HTMLUnknownElement.callCallback (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:336:14)
          at invokeEventListeners (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:193:27)
          at HTMLUnknownElementImpl._dispatch (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:119:9)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:82:17)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\nodes\HTMLElement-impl.js:30:27)
          at HTMLUnknownElement.dispatchEvent (C:\Users\lucia\meetup3000\meetup3000\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:157:21)
          at Object.invokeGuardedCallbackDev (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:385:16)
          at invokeGuardedCallback (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:440:31)
          at beginWork$$1 (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:25780:7)
          at performUnitOfWork (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24698:12)
          at workLoopSync (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24671:22)
          at performSyncWorkOnRoot (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24270:11)
          at scheduleUpdateOnFiber (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:23698:7)
          at updateContainer (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:27103:3)
          at C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:27528:7
          at unbatchedUpdates (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24433:12)
          at legacyRenderSubtreeIntoContainer (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:27527:5)
          at Object.render (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:27608:10)
          at fn (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:437:26)
          at C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:354:37
          at batchedUpdates$1 (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom.development.js:24386:12)
          at Object.act (C:\Users\lucia\meetup3000\meetup3000\node_modules\react-dom\cjs\react-dom-test-utils.development.js:1092:14)
          at wrapAct (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:354:13)
          at Object.render (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme-adapter-react-16\src\ReactSixteenAdapter.js:423:16)
          at new ReactWrapper (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme\src\ReactWrapper.js:115:16)
          at mount (C:\Users\lucia\meetup3000\meetup3000\node_modules\enzyme\src\mount.js:10:10)
          at Object.<anonymous> (C:\Users\lucia\meetup3000\meetup3000\src\__tests__\App.test.js:48:24)
          at Object.asyncJestTest (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-jasmine2\build\jasmineAsyncInstall.js:102:37)
          at C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-jasmine2\build\queueRunner.js:43:12
          at new Promise (<anonymous>)
          at mapper (C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-jasmine2\build\queueRunner.js:26:19)
          at C:\Users\lucia\meetup3000\meetup3000\node_modules\jest-jasmine2\build\queueRunner.js:73:41
          at processTicksAndRejections (internal/process/task_queues.js:93:5)
    console.error node_modules/react-dom/cjs/react-dom.development.js:21843
      The above error occurred in the <App> component:
          in App (created by WrapperComponent)
          in WrapperComponent

      Consider adding an error boundary to your tree to customize error handling behavior.
      Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

  ● <App /> component › render list of events

    TypeError: Cannot read property 'events' of null

      16 |       <div className="App" >
      17 |         <CitySearch updateEvents={this.updateEvents} />
    > 18 |         <EventList events={this.state.events} />
         |                                       ^
      19 |       </div>
      20 |     );
      21 |   }

      at App.render (src/App.js:18:39)
      at ReactShallowRenderer._mountClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer-shallow.development.js:912:37)
      at ReactShallowRenderer.render (node_modules/react-test-renderer/cjs/react-test-renderer-shallow.development.js:829:14)
      at fn (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:675:53)
      at withSetStateAllowed (node_modules/enzyme-adapter-utils/src/Utils.js:99:18)
      at Object.render (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:675:18)
      at new ShallowWrapper (node_modules/enzyme/src/ShallowWrapper.js:411:22)
      at shallow (node_modules/enzyme/src/shallow.js:10:10)
      at Object.<anonymous> (src/__tests__/App.test.js:14:18)

  ● <App /> component › render list of events

    TypeError: Cannot read property 'find' of undefined

      16 |
      17 |   test('render list of events', () => {
    > 18 |     expect(AppWrapper.find(EventList)).toHaveLength(1);
         |                       ^
      19 |   });
      20 |
      21 |   test('render CitySearch', () => {

      at Object.<anonymous> (src/__tests__/App.test.js:18:23)

  ● <App /> component › render CitySearch

    TypeError: Cannot read property 'events' of null

      16 |       <div className="App" >
      17 |         <CitySearch updateEvents={this.updateEvents} />
    > 18 |         <EventList events={this.state.events} />
         |                                       ^
      19 |       </div>
      20 |     );
      21 |   }

      at App.render (src/App.js:18:39)
      at ReactShallowRenderer._mountClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer-shallow.development.js:912:37)
      at ReactShallowRenderer.render (node_modules/react-test-renderer/cjs/react-test-renderer-shallow.development.js:829:14)
      at fn (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:675:53)
      at withSetStateAllowed (node_modules/enzyme-adapter-utils/src/Utils.js:99:18)
      at Object.render (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:675:18)
      at new ShallowWrapper (node_modules/enzyme/src/ShallowWrapper.js:411:22)
      at shallow (node_modules/enzyme/src/shallow.js:10:10)
      at Object.<anonymous> (src/__tests__/App.test.js:14:18)

  ● <App /> component › render CitySearch

    TypeError: Cannot read property 'find' of undefined

      20 |
      21 |   test('render CitySearch', () => {
    > 22 |     expect(AppWrapper.find(CitySearch)).toHaveLength(1);
         |                       ^
      23 |   });
      24 |
      25 | });

      at Object.<anonymous> (src/__tests__/App.test.js:22:23)

  ● <App /> integration › get list of events after user selects a city

    TypeError: Cannot read property 'events' of null

      16 |       <div className="App" >
      17 |         <CitySearch updateEvents={this.updateEvents} />
    > 18 |         <EventList events={this.state.events} />
         |                                       ^
      19 |       </div>
      20 |     );
      21 |   }

      at App.render (src/App.js:18:39)
      at finishClassComponent (node_modules/react-dom/cjs/react-dom.development.js:18470:31)
      at updateClassComponent (node_modules/react-dom/cjs/react-dom.development.js:18423:24)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:20186:16)
      at HTMLUnknownElement.callCallback (node_modules/react-dom/cjs/react-dom.development.js:336:14)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:385:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:440:31)
      at beginWork$$1 (node_modules/react-dom/cjs/react-dom.development.js:25780:7)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:24698:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:24671:22)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:24270:11)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:23698:7)
      at updateContainer (node_modules/react-dom/cjs/react-dom.development.js:27103:3)
      at node_modules/react-dom/cjs/react-dom.development.js:27528:7
      at unbatchedUpdates (node_modules/react-dom/cjs/react-dom.development.js:24433:12)
      at legacyRenderSubtreeIntoContainer (node_modules/react-dom/cjs/react-dom.development.js:27527:5)
      at Object.render (node_modules/react-dom/cjs/react-dom.development.js:27608:10)
      at fn (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:437:26)
      at node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:354:37
      at batchedUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:24386:12)
      at Object.act (node_modules/react-dom/cjs/react-dom-test-utils.development.js:1092:14)
      at wrapAct (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:354:13)
      at Object.render (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:423:16)
      at new ReactWrapper (node_modules/enzyme/src/ReactWrapper.js:115:16)
      at mount (node_modules/enzyme/src/mount.js:10:10)
      at Object.<anonymous> (src/__tests__/App.test.js:30:24)

  ● <App /> integration › change state after get list of events

    TypeError: Cannot read property 'events' of null

      16 |       <div className="App" >
      17 |         <CitySearch updateEvents={this.updateEvents} />
    > 18 |         <EventList events={this.state.events} />
         |                                       ^
      19 |       </div>
      20 |     );
      21 |   }

      at App.render (src/App.js:18:39)
      at ReactShallowRenderer._mountClassComponent (node_modules/react-test-renderer/cjs/react-test-renderer-shallow.development.js:912:37)
      at ReactShallowRenderer.render (node_modules/react-test-renderer/cjs/react-test-renderer-shallow.development.js:829:14)
      at fn (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:675:53)
      at withSetStateAllowed (node_modules/enzyme-adapter-utils/src/Utils.js:99:18)
      at Object.render (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:675:18)
      at new ShallowWrapper (node_modules/enzyme/src/ShallowWrapper.js:411:22)
      at shallow (node_modules/enzyme/src/shallow.js:10:10)
      at Object.<anonymous> (src/__tests__/App.test.js:41:24)

  ● <App /> integration › render correct list of events

    TypeError: Cannot read property 'events' of null

      16 |       <div className="App" >
      17 |         <CitySearch updateEvents={this.updateEvents} />
    > 18 |         <EventList events={this.state.events} />
         |                                       ^
      19 |       </div>
      20 |     );
      21 |   }

      at App.render (src/App.js:18:39)
      at finishClassComponent (node_modules/react-dom/cjs/react-dom.development.js:18470:31)
      at updateClassComponent (node_modules/react-dom/cjs/react-dom.development.js:18423:24)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:20186:16)
      at HTMLUnknownElement.callCallback (node_modules/react-dom/cjs/react-dom.development.js:336:14)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:385:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:440:31)
      at beginWork$$1 (node_modules/react-dom/cjs/react-dom.development.js:25780:7)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:24698:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:24671:22)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:24270:11)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:23698:7)
      at updateContainer (node_modules/react-dom/cjs/react-dom.development.js:27103:3)
      at node_modules/react-dom/cjs/react-dom.development.js:27528:7
      at unbatchedUpdates (node_modules/react-dom/cjs/react-dom.development.js:24433:12)
      at legacyRenderSubtreeIntoContainer (node_modules/react-dom/cjs/react-dom.development.js:27527:5)
      at Object.render (node_modules/react-dom/cjs/react-dom.development.js:27608:10)
      at fn (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:437:26)
      at node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:354:37
      at batchedUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:24386:12)
      at Object.act (node_modules/react-dom/cjs/react-dom-test-utils.development.js:1092:14)
      at wrapAct (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:354:13)
      at Object.render (node_modules/enzyme-adapter-react-16/src/ReactSixteenAdapter.js:423:16)
      at new ReactWrapper (node_modules/enzyme/src/ReactWrapper.js:115:16)
      at mount (node_modules/enzyme/src/mount.js:10:10)
      at Object.<anonymous> (src/__tests__/App.test.js:48:24)

-------------------|----------|----------|----------|----------|-------------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |    88.46 |      100 |       80 |    91.67 |                   |
 App.js            |       50 |      100 |    33.33 |    66.67 |                11 |
 CitySearch.js     |      100 |      100 |      100 |      100 |                   |
 EventList.js      |      100 |      100 |      100 |      100 |                   |
 NumberOfEvents.js |      100 |      100 |      100 |      100 |                   |
 api.js            |       50 |      100 |       50 |       50 |                 4 |
 mock-events.js    |      100 |      100 |      100 |      100 |                   |
-------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 failed, 4 passed, 5 total
Tests:       5 failed, 16 passed, 21 total
Snapshots:   0 total
Time:        6.291s
Ran all test suites related to changed files.


*/