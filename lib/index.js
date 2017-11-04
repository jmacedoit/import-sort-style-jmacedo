"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styleApi) {
    const { and, hasDefaultMember, hasNamedMembers, hasNamespaceMember, hasNoMember, hasOnlyDefaultMember, hasOnlyNamedMembers, hasOnlyNamespaceMember, isAbsoluteModule, isRelativeModule, member, name, not, startsWithAlphanumeric, startsWithLowerCase, startsWithUpperCase, unicode, } = styleApi;
    return [
        // import "foo"
        { match: and(hasNoMember) },
        // import * as Foo from "bar";
        { match: and(hasOnlyNamespaceMember, member(startsWithUpperCase)), sort: member(unicode) },
        // import * as _ from "bar";
        { match: and(hasOnlyNamespaceMember, not(member(startsWithAlphanumeric))), sort: member(unicode) },
        // import * as foo from "bar";
        { match: and(hasOnlyNamespaceMember, member(startsWithLowerCase)), sort: member(unicode) },
        // import {Foo, bar, …} from "baz";
        { match: and(hasOnlyNamedMembers, member(startsWithUpperCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        // import {_, bar, …} from "baz";
        { match: and(hasOnlyNamedMembers, not(member(startsWithAlphanumeric))), sort: member(unicode), sortNamedMembers: name(unicode) },
        // import {foo, bar, …} from "baz";
        { match: and(hasOnlyNamedMembers, member(startsWithLowerCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        // import Foo, {bar, …} from "baz";
        { match: and(hasDefaultMember, member(startsWithUpperCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        // import _, {bar, …} from "baz";
        { match: and(hasDefaultMember, not(member(startsWithAlphanumeric))), sort: member(unicode), sortNamedMembers: name(unicode) },
        // import foo, {bar, …} from "baz";
        { match: and(hasDefaultMember, member(startsWithLowerCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { separator: true },
    ];
}
exports.default = default_1;
