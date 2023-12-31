/* tslint:disable */
/* eslint-disable */
/**
* @param {string} server
* @param {string} path
* @param {string} method
* @param {string} data
* @param {Map<any, any>} headers
* @param {string} client_websocket_url
* @returns {Promise<string>}
*/
export function requestViaWebsocket(server: string, path: string, method: string, data: string, headers: Map<any, any>, client_websocket_url: string): Promise<string>;
/**
* @param {string} server
* @param {string} path
* @param {string} method
* @param {string} data
* @param {Map<any, any>} headers
* @param {Array<any>} request_strings_to_notarize
* @param {Array<any>} response_strings_to_notarize
* @param {Array<any>} keys_to_notarize
* @param {string} notary_url
* @param {string} client_websocket_url
* @returns {Promise<string>}
*/
export function notarizeRequest(server: string, path: string, method: string, data: string, headers: Map<any, any>, request_strings_to_notarize: Array<any>, response_strings_to_notarize: Array<any>, keys_to_notarize: Array<any>, notary_url: string, client_websocket_url: string): Promise<string>;
/**
* @param {number} num_threads
* @returns {Promise<any>}
*/
export function initThreadPool(num_threads: number): Promise<any>;
/**
* @param {number} receiver
*/
export function wbg_rayon_start_worker(receiver: number): void;
/**
*/
export class wbg_rayon_PoolBuilder {
  free(): void;
/**
* @returns {number}
*/
  numThreads(): number;
/**
* @returns {number}
*/
  receiver(): number;
/**
*/
  build(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly requestViaWebsocket: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
  readonly notarizeRequest: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number) => number;
  readonly __wbg_wbg_rayon_poolbuilder_free: (a: number) => void;
  readonly wbg_rayon_poolbuilder_numThreads: (a: number) => number;
  readonly wbg_rayon_poolbuilder_receiver: (a: number) => number;
  readonly wbg_rayon_poolbuilder_build: (a: number) => void;
  readonly wbg_rayon_start_worker: (a: number) => void;
  readonly initThreadPool: (a: number) => number;
  readonly OPENSSL_memcpy: (a: number, b: number, c: number) => number;
  readonly OPENSSL_memset: (a: number, b: number, c: number) => number;
  readonly p256_point_mul: (a: number, b: number, c: number, d: number) => void;
  readonly p256_point_mul_base: (a: number, b: number) => void;
  readonly p256_mul_mont: (a: number, b: number, c: number) => void;
  readonly p256_sqr_mont: (a: number, b: number) => void;
  readonly p256_point_add: (a: number, b: number, c: number) => void;
  readonly p256_point_double: (a: number, b: number) => void;
  readonly p256_point_add_affine: (a: number, b: number, c: number) => void;
  readonly GFp_x25519_ge_frombytes_vartime: (a: number, b: number) => number;
  readonly GFp_x25519_ge_scalarmult_base: (a: number, b: number) => void;
  readonly GFp_x25519_sc_reduce: (a: number) => void;
  readonly GFp_x25519_scalar_mult_generic_masked: (a: number, b: number, c: number) => void;
  readonly GFp_x25519_public_from_private_generic_masked: (a: number, b: number) => void;
  readonly GFp_x25519_fe_invert: (a: number, b: number) => void;
  readonly GFp_x25519_fe_isnegative: (a: number) => number;
  readonly GFp_x25519_fe_mul_ttt: (a: number, b: number, c: number) => void;
  readonly GFp_x25519_fe_neg: (a: number) => void;
  readonly GFp_x25519_fe_tobytes: (a: number, b: number) => void;
  readonly GFp_x25519_ge_double_scalarmult_vartime: (a: number, b: number, c: number, d: number) => void;
  readonly GFp_x25519_sc_mask: (a: number) => void;
  readonly GFp_x25519_sc_muladd: (a: number, b: number, c: number, d: number) => void;
  readonly LIMBS_add_mod: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly GFp_aes_nohw_encrypt: (a: number, b: number, c: number) => void;
  readonly GFp_poly1305_finish: (a: number, b: number) => void;
  readonly GFp_poly1305_update: (a: number, b: number, c: number) => void;
  readonly bn_mul_mont: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly bn_from_montgomery_in_place: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly little_endian_bytes_from_scalar: (a: number, b: number, c: number, d: number) => void;
  readonly p256_scalar_mul_mont: (a: number, b: number, c: number) => void;
  readonly p256_scalar_sqr_rep_mont: (a: number, b: number, c: number) => void;
  readonly LIMBS_shl_mod: (a: number, b: number, c: number, d: number) => void;
  readonly GFp_bn_from_montgomery_in_place: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly nistz384_point_mul: (a: number, b: number, c: number, d: number) => void;
  readonly p384_elem_mul_mont: (a: number, b: number, c: number) => void;
  readonly nistz384_point_add: (a: number, b: number, c: number) => void;
  readonly p384_scalar_mul_mont: (a: number, b: number, c: number) => void;
  readonly p384_elem_sub: (a: number, b: number, c: number) => void;
  readonly p384_elem_div_by_2: (a: number, b: number) => void;
  readonly p384_elem_neg: (a: number, b: number) => void;
  readonly nistz384_point_double: (a: number, b: number) => void;
  readonly GFp_bn_neg_inv_mod_r_u64: (a: number) => number;
  readonly __assert_fail: (a: number, b: number, c: number, d: number) => void;
  readonly LIMBS_are_zero: (a: number, b: number) => number;
  readonly LIMBS_equal: (a: number, b: number, c: number) => number;
  readonly LIMBS_equal_limb: (a: number, b: number, c: number) => number;
  readonly LIMBS_are_even: (a: number, b: number) => number;
  readonly LIMBS_less_than: (a: number, b: number, c: number) => number;
  readonly LIMBS_less_than_limb: (a: number, b: number, c: number) => number;
  readonly LIMBS_reduce_once: (a: number, b: number, c: number) => void;
  readonly LIMBS_sub_mod: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly LIMBS_select_512_32: (a: number, b: number, c: number, d: number) => number;
  readonly LIMBS_window5_split_window: (a: number, b: number, c: number) => number;
  readonly LIMBS_window5_unsplit_window: (a: number, b: number) => number;
  readonly LIMB_shr: (a: number, b: number) => number;
  readonly GFp_limbs_mul_add_limb: (a: number, b: number, c: number, d: number) => number;
  readonly limbs_mul_add_limb: (a: number, b: number, c: number, d: number) => number;
  readonly GFp_aes_nohw_set_encrypt_key: (a: number, b: number, c: number) => number;
  readonly GFp_aes_nohw_ctr32_encrypt_blocks: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly GFp_poly1305_init: (a: number, b: number) => void;
  readonly GFp_memcmp: (a: number, b: number, c: number) => number;
  readonly memory: WebAssembly.Memory;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc8875b360ea0d8fb: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf4e8070ea6f87e87: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd8ba6001abf331ce: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h41305cb3079b1f22: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h40120adb593b16d0: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_thread_destroy: (a: number, b: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
* @param {WebAssembly.Memory} maybe_memory
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput, maybe_memory?: WebAssembly.Memory): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
* @param {WebAssembly.Memory} maybe_memory
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>, maybe_memory?: WebAssembly.Memory): Promise<InitOutput>;
