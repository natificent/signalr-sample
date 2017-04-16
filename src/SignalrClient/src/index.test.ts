import { expect } from 'chai';
import 'mocha';
import hello from "./index";
import { InvocationDescriptor } from './InvocationDescriptor'
import { Message, MessageType } from './Message'
import { Connection } from './Connection';
import { WebSocket } from 'mock-socket';


describe('Can Connect', () => {
    it('should connect', () =>{
        const connection = new Connection("ws://localhost:54572/chat");
        connection.enableLogging=true;
        connection.connectionMethods.onConnected = () =>{
            expect(true).to.be.true;
        }
        connection.start();
    });
});

describe('Hello function', () => {
    it('should return hello world', () =>{
        const result = hello();
        expect(result).to.equal('Hello World!');
    });
});