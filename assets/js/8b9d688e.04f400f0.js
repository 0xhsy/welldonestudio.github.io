"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5141],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"SUI Game Example",description:"Learning about how to build a game in Sui"},c="Building a Game on Sui with VRF and Dynamic NFTs",p={unversionedId:"tutorials/sui-game/index",id:"tutorials/sui-game/index",title:"SUI Game Example",description:"Learning about how to build a game in Sui",source:"@site/docs/tutorials/sui-game/index.md",sourceDirName:"tutorials/sui-game",slug:"/tutorials/sui-game/",permalink:"/tutorials/sui-game/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/sui-game/index.md",tags:[],version:"current",frontMatter:{title:"SUI Game Example",description:"Learning about how to build a game in Sui"},sidebar:"tutorialSidebar",previous:{title:"SUI Coin Deployment",permalink:"/tutorials/sui-move-coin/"},next:{title:"AboutUs",permalink:"/aboutus"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Code Tutorials",id:"code-tutorials",level:2},{value:"Smart Contract: Weapon Struct",id:"smart-contract-weapon-struct",level:3},{value:"Smart Contract: Ownership",id:"smart-contract-ownership",level:3},{value:"Smart Contract: Create Weapon",id:"smart-contract-create-weapon",level:3},{value:"Smart Contract: Request Updating Weapon",id:"smart-contract-request-updating-weapon",level:3},{value:"Smart Contract: Update Weapon",id:"smart-contract-update-weapon",level:3},{value:"Deploy Smart Contract with WELLDONE Code",id:"deploy-smart-contract-with-welldone-code",level:2},{value:"New Project",id:"new-project",level:3},{value:"Source Code",id:"source-code",level:3},{value:"Compile The Source Code",id:"compile-the-source-code",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Check Out Deployed Contract",id:"check-out-deployed-contract",level:3},{value:"Calling Contract Functions",id:"calling-contract-functions",level:3},{value:"Reference",id:"reference",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-a-game-on-sui-with-vrf-and-dynamic-nfts"},"Building a Game on Sui with VRF and Dynamic NFTs"),(0,o.kt)("div",null,(0,o.kt)("span",{className:"author-sm"},"July 17, 2023"),(0,o.kt)("div",{className:"author-div"},(0,o.kt)("div",{className:"author-avatars"},(0,o.kt)("a",{href:"https://github.com/sunny0529",target:"_blank"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/49579003?v=4"}))),(0,o.kt)("div",null,(0,o.kt)("span",{className:"author-name"},"Hyunsun Yoo"),(0,o.kt)("br",null),(0,o.kt)("span",{className:"author-sm"},"Software Engineer, DSRV")))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("img",{src:n(37241).Z,alt:"template-code-sui",style:{width:"90%"}}),(0,o.kt)("p",null,"Here is an educational game prototype that can be fast, scalable, and transparent with mutable, fully on-chain NFTs and verifiable random. Sui has a lot of unique features. Sui\u2019s unique language, Move\xa0is awesome: It\u2019s safe, efficient for blockchain, and resistant to vulnerabilities such as reentrancy. But without move expertise, here's an easy way to build a game on Sui, with a web IDE that doesn't require any development setup. And let's take a look at how Sui's unique features, such as dynamic NFTs and VRF, can enhance the gaming experience."),(0,o.kt)("h2",{id:"code-tutorials"},"Code Tutorials"),(0,o.kt)("h3",{id:"smart-contract-weapon-struct"},"Smart Contract: Weapon Struct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    /// Weapon NFT\n    struct Weapon has key, store {\n        id: UID,\n        name: string::String,\n        description: string::String,\n        url: Url,\n        /// TODO: add custom attributes\n        power: u8,\n    }\n")),(0,o.kt)("h3",{id:"smart-contract-ownership"},"Smart Contract: Ownership"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    struct Ownership has key {\n        id: UID\n    }\n\n    fun init(ctx: &mut TxContext) {\n        let ownership = Ownership {\n            id: object::new(ctx),\n        };\n        /// Transfer the ownership object to the module/package publisher\n        transfer::transfer(ownership, tx_context::sender(ctx));\n    }\n\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ownership")," object to ensure that only authorized people can mint and modify NFTs. In this example, the authorized person is the module/package publisher (the game company). Transfer the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ownership")," object to the publisher in the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function, which is executed only once when deploying the smart contract."),(0,o.kt)("h3",{id:"smart-contract-create-weapon"},"Smart Contract: Create Weapon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    /// Create a new Weapon\n    public entry fun mint(\n        _: &Ownership,\n        name: vector<u8>,\n        description: vector<u8>,\n        url: vector<u8>,\n        recipient: address,\n        ctx: &mut TxContext\n    ) {\n        let nft = DevNetNFT {\n            id: object::new(ctx),\n            name: string::utf8(name),\n            description: string::utf8(description),\n            url: url::new_unsafe_from_bytes(url),\n            power: 0\n        };\n\n        transfer::public_transfer(nft, recipient);\n    }\n")),(0,o.kt)("p",null,"By taking Ownership as the parameter, Only addresses that own the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ownership")," object can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," function."),(0,o.kt)("h3",{id:"smart-contract-request-updating-weapon"},"Smart Contract: Request Updating Weapon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    /// An object for consign\n    struct ConsignedObj has key, store {\n        id: UID,\n        /// owner of the consigned object\n        sender: address,\n        /// the consigned object\n        weapon: Option<ID>,\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ConsignedObj")," is an object for consigning an item to the game company to request an update on the item."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    /// `users` create an consign for consigning\n    /// an item to `third_party`\n    public entry fun create(\n        third_party: address,\n        weapon: Weapon,\n        ctx: &mut TxContext\n    ) {\n        let sender = tx_context::sender(ctx);\n        let consigned = ConsignedObj { id: object::new(ctx), weapon: option::none(), sender: sender };\n        \n        option::fill(&mut consigned.weapon, object::id(&weapon));\n        dynamic_object_field::add(&mut consigned.id, 0, weapon);\n\n        // consign the object with the trusted third party\n        transfer::public_transfer(consigned, third_party);\n    }\n")),(0,o.kt)("p",null,"Users can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," function to request enchanting their item."),(0,o.kt)("h3",{id:"smart-contract-update-weapon"},"Smart Contract: Update Weapon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    /// Trusted third party can update nft\n    /// Update the `power` of 'nft'\n    public entry fun upgrade_power(_: &Ownership, obj: ConsignedObj, output: vector<u8>, input: vector<u8>, public_key: vector<u8>, proof: vector<u8>, ctx: &mut TxContext) {\n        let verified = ecvrf::ecvrf_verify(&output, &input, &public_key, &proof);\n        event::emit(VerifiedEvent {is_verified: verified});\n\n        assert!(!verified, ENotVerified);\n\n        let third_party = tx_context::sender(ctx);\n        let ConsignedObj {\n            id: id,\n            sender: sender,\n            weapon: temp,\n        } = obj;\n\n        let weapon: Weapon = dynamic_object_field::remove(&mut id, 0);\n        let weapon_id = option::extract(&mut temp);\n        assert!(object::id(&weapon) == weapon_id, 0);\n        \n        weapon.power = weapon.power + 1;\n        \n        event::emit(NFTUpgrade {\n            object_id: weapon_id,\n            creator: third_party,\n            name: weapon.name,\n            power: weapon.power,\n        });\n\n        object::delete(id);\n        transfer::public_transfer(weapon, sender);\n    }\n")),(0,o.kt)("p",null,"The module/package publisher (the game company) can enchant an item. There are three main parts to enchanting:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verifiable Random Function (",(0,o.kt)("a",{parentName:"li",href:"https://docs.sui.io/learn/cryptography/ecvrf"},"VRF"),")")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"enchant")," function takes parameters a random ",(0,o.kt)("inlineCode",{parentName:"li"},"output"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"alpha_string"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"public_key"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"proof")," generated by the game company via VRF. Then inside the function, the random is verified, and if it passes, the result of random output determines whether the item is enchanted or not.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Why is the Verifiable Random Function important in games?"),(0,o.kt)("div",null,(0,o.kt)("div",null," A Verifiable Random Function (VRF) enables the holder of a private key to generate a hashed value for the message, which can be verified by anyone possessing the corresponding public key to ensure the validity of the hash. Therefore, by using VRF Users have the ability to verify the random value used in games. Since the Random Function is such an important component of gaming and blockchain, it's important to provide transparent random for Sui users."))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Dynamic NFTs")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the random output determines that the item enchant, change the properties of the NFT. All game items such as weapons and armor are all Dynamic NFTs on-chain. As users enchant their item with scroll, attributes such as power, delay, and durability are all updated live and can be checked through Sui Explorer. ")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Why is the Dynamic NFTs important in games?"),(0,o.kt)("div",null,(0,o.kt)("div",null," Traditional NFTs are immutable once minted, while Dynamic NFTs are programmed to change their value based on external inputs. Using Dynamic NFTs in the game enables a program to change the properties of a user's items to become more powerful based on the user's contributions as they progress through the game. Sui's fast speed allows for real-time changes of NFT in fast-paced games. Additionally, Sui's comprehensive support for fully on-chain NFTs enables dynamic NFTs, which offer great advantages in gaming applications."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Returning NFT to the user who requested the enchanting")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"ConsignedObj"),", return NFT to the user who requested the enchanting.")),(0,o.kt)("h2",{id:"deploy-smart-contract-with-welldone-code"},"Deploy Smart Contract with WELLDONE Code"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code/getting-started"},"here")," to get started.")),(0,o.kt)("h3",{id:"new-project"},"New Project"),(0,o.kt)("p",null,"Automatically generate a contract structure. Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," button to create a contract structure."),(0,o.kt)("img",{src:n(29647).Z,alt:"template-code-sui",style:{width:"50%"}}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"sui/"),". If you start a new project, the structure should look like the following.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sui\n\u2514\u2500\u2500 weapon\n    \u251c\u2500\u2500 Move.toml\n    \u251c\u2500\u2500 Move.lock\n    \u2514\u2500\u2500 sources\n        \u2514\u2500\u2500 weapon.move\n")),(0,o.kt)("h3",{id:"source-code"},"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="weapon.move"',title:'"weapon.move"'},"module examples::weapon {\n    use sui::url::{Self, Url};\n    use std::string;\n    use sui::object::{Self, ID, UID};\n    use sui::event;\n    use sui::transfer;\n    use sui::tx_context::{Self, TxContext};\n    use std::option::{Self, Option};\n    use sui::dynamic_object_field;\n    use sui::ecvrf;\n\n    /// Weapon NFT\n    struct Weapon has key, store {\n        id: UID,\n        name: string::String,\n        description: string::String,\n        url: Url,\n        /// TODO: add custom attributes\n        power: u8,\n    }\n\n    struct Ownership has key {\n        id: UID\n    }\n\n    /// An object for consign\n    struct ConsignedObj has key, store {\n        id: UID,\n        /// owner of the consigned object\n        sender: address,\n        /// the consigned object\n        weapon: Option<ID>,\n    }\n\n    fun init(ctx: &mut TxContext) {\n        let ownership = Ownership {\n            id: object::new(ctx),\n        };\n        transfer::transfer(ownership, tx_context::sender(ctx));\n    }\n\n    // ===== Error codes =====\n\n    const ENotVerified: u64 = 0;\n\n    // ===== Events =====\n\n    struct NFTMinted has copy, drop {\n        // The Object ID of the NFT\n        object_id: ID,\n        // The creator of the NFT\n        creator: address,\n        // The name of the NFT\n        name: string::String,\n    }\n    \n    struct NFTUpgrade has copy, drop {\n        // The Object ID of the NFT\n        object_id: ID,\n        // The creator of the NFT\n        creator: address,\n        // The name of the NFT\n        name: string::String,\n\n        power: u8,\n    }\n\n    /// Event on whether the output is verified\n    struct VerifiedEvent has copy, drop {\n        is_verified: bool,\n    }\n\n    // ===== Public view functions =====\n\n    /// Get the NFT's `name`\n    public fun name(nft: &Weapon): &string::String {\n        &nft.name\n    }\n\n    /// Get the NFT's `description`\n    public fun description(nft: &Weapon): &string::String {\n        &nft.description\n    }\n\n    /// Get the NFT's `url`\n    public fun url(nft: &Weapon): &Url {\n        &nft.url\n    }\n\n    /// Get the NFT's `power`\n    public fun power(nft: &Weapon): &u8 {\n        &nft.power\n    }\n\n    // ===== Entrypoints =====\n\n    /// Create a new Weapon\n    public entry fun mint(\n        _: &Ownership,\n        name: vector<u8>,\n        description: vector<u8>,\n        url: vector<u8>,\n        recipient: address,\n        ctx: &mut TxContext\n    ) {\n        let sender = tx_context::sender(ctx);\n        let nft = Weapon {\n            id: object::new(ctx),\n            name: string::utf8(name),\n            description: string::utf8(description),\n            url: url::new_unsafe_from_bytes(url),\n            power: 0\n        };\n\n        event::emit(NFTMinted {\n            object_id: object::id(&nft),\n            creator: sender,\n            name: nft.name,\n        });\n\n        transfer::public_transfer(nft, recipient);\n    }\n\n    /// Transfer `nft` to `recipient`\n    public entry fun transfer(\n        nft: Weapon, recipient: address, _: &mut TxContext\n    ) {\n        transfer::public_transfer(nft, recipient)\n    }\n\n    /// `users` create an consign for consigning\n    /// an item to `third_party`\n    public entry fun create(\n        third_party: address,\n        weapon: Weapon,\n        ctx: &mut TxContext\n    ) {\n        let sender = tx_context::sender(ctx);\n        let consigned = ConsignedObj { id: object::new(ctx), weapon: option::none(), sender: sender };\n        \n        option::fill(&mut consigned.weapon, object::id(&weapon));\n        dynamic_object_field::add(&mut consigned.id, 0, weapon);\n\n        // consign the object with the trusted third party\n        transfer::public_transfer(consigned, third_party);\n    }\n\n    /// Trusted third party can update nft\n    /// Update the `power` of 'nft'\n    public entry fun upgrade_power(_: &Ownership, obj: ConsignedObj, output: vector<u8>, input: vector<u8>, public_key: vector<u8>, proof: vector<u8>, ctx: &mut TxContext) {\n        let verified = ecvrf::ecvrf_verify(&output, &input, &public_key, &proof);\n        event::emit(VerifiedEvent {is_verified: verified});\n\n        assert!(!verified, ENotVerified);\n\n        let third_party = tx_context::sender(ctx);\n        let ConsignedObj {\n            id: id,\n            sender: sender,\n            weapon: temp,\n        } = obj;\n\n        let weapon: Weapon = dynamic_object_field::remove(&mut id, 0);\n        let weapon_id = option::extract(&mut temp);\n        assert!(object::id(&weapon) == weapon_id, 0);\n        \n        weapon.power = weapon.power + 1;\n        \n        event::emit(NFTUpgrade {\n            object_id: weapon_id,\n            creator: third_party,\n            name: weapon.name,\n            power: weapon.power,\n        });\n\n        object::delete(id);\n        transfer::public_transfer(weapon, sender);\n    }\n\n    /// Permanently delete `nft`\n    public entry fun burn(nft: Weapon, _: &mut TxContext) {\n        let Weapon { id, name: _, description: _, url: _, power : _, } = nft;\n        object::delete(id)\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="Move.toml"',title:'"Move.toml"'},'[package]\nname = "Examples"\nversion = "0.0.1"\n\n[dependencies]\nSui = { git = "https://github.com/MystenLabs/sui.git", subdir="crates/sui-framework/packages/sui-framework/", rev = "testnet" }\n\n[addresses]\nexamples = "0x0"\n')),(0,o.kt)("h3",{id:"compile-the-source-code"},"Compile The Source Code"),(0,o.kt)("p",null,"Select the project you want to compile. For now, let's choose ",(0,o.kt)("inlineCode",{parentName:"p"},"sui/weapon")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Compile")," button."),(0,o.kt)("img",{src:n(24788).Z,alt:"02_project-to-compile-weapon",style:{width:"480px"}}),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"If the compilation succeed, you can see mv file ",(0,o.kt)("inlineCode",{parentName:"p"},"weapon.mv"),"."),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," button."),(0,o.kt)("img",{src:n(60726).Z,alt:"03_build-file-weapon",style:{width:"480px"}}),(0,o.kt)("p",null,"and you can see wallet popup. Let's click ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," button."),(0,o.kt)("img",{src:n(95716).Z,alt:"04_sui-wallet-popup",style:{width:"480px"}}),(0,o.kt)("h3",{id:"check-out-deployed-contract"},"Check Out Deployed Contract"),(0,o.kt)("p",null,"After deployment, you can see weapon module and functions."),(0,o.kt)("h3",{id:"calling-contract-functions"},"Calling Contract Functions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," function. First parameter is Ownership object id.\nYou can get the object id in the terminal log which shows for above deployment transaction result.\nThe second through fourth parameters are the name, description, and url of the NFT to mint, in that order.\nThe fifth parameter is the address to which the minted NFTs will be sent.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After mint transaction, check if Weapon was minted in ",(0,o.kt)("a",{parentName:"p",href:"https://suiexplorer.com/"},"SUI Explorer"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," function with the recipient's account that you entered in the 5th parameter in step 1.\nThe first parameter is the type of Weapon NFT you want to update. The second parameter is the address where you deployed this smart contract. The third parameter is the object ID of the Weapon NFT you want to update.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Return to the account where you deployed the smart contract and run the ",(0,o.kt)("inlineCode",{parentName:"p"},"enchant")," function.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After enchant transaction, check if Weapon was returned to the user and updated in ",(0,o.kt)("a",{parentName:"p",href:"https://suiexplorer.com/"},"SUI Explorer"),"."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://examples.sui.io/samples/nft.html"},"https://examples.sui.io/samples/nft.html")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.sui.io/learn/cryptography/ecvrf"},"https://docs.sui.io/learn/cryptography/ecvrf")))}m.isMDXComponent=!0},24788:function(e,t,n){t.Z=n.p+"assets/images/02-8adc714ced13f6a7dba6abb909f9ee4e.png"},60726:function(e,t,n){t.Z=n.p+"assets/images/03-4f55a40dac9e2fcd5633644fd358e141.png"},95716:function(e,t,n){t.Z=n.p+"assets/images/04-cc7599d0839c3d94ecbf80ec1340876f.png"},29647:function(e,t,n){t.Z=n.p+"assets/images/new-project-sui-d601ee9d8bfcaf072ca1f96eb7d793a1.png"},37241:function(e,t,n){t.Z=n.p+"assets/images/study-u-and-i-4d9e832a1b28300e0be506fa2d8fbce1.png"}}]);